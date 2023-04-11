import { SpeakeasyBase } from "../../../internal/utils";
export declare enum AttributePropagationSettingsOutputCredentialsEnum {
    OutputCredentialsUnspecified = "OUTPUT_CREDENTIALS_UNSPECIFIED",
    Header = "HEADER",
    Jwt = "JWT",
    Rctoken = "RCTOKEN"
}
/**
 * Configuration for propagating attributes to applications protected by IAP.
 */
export declare class AttributePropagationSettings extends SpeakeasyBase {
    /**
     * Whether the provided attribute propagation settings should be evaluated on user requests. If set to true, attributes returned from the expression will be propagated in the set output credentials.
     */
    enable?: boolean;
    /**
     * Raw string CEL expression. Must return a list of attributes. A maximum of 45 attributes can be selected. Expressions can select different attribute types from `attributes`: `attributes.saml_attributes`, `attributes.iap_attributes`. The following functions are supported: - filter `.filter(, )`: Returns a subset of `` where `` is true for every item. - in ` in `: Returns true if `` contains ``. - selectByName `.selectByName()`: Returns the attribute in `` with the given `` name, otherwise returns empty. - emitAs `.emitAs()`: Sets the `` name field to the given `` for propagation in selected output credentials. - strict `.strict()`: Ignores the `x-goog-iap-attr-` prefix for the provided `` when propagating with the `HEADER` output credential, such as request headers. - append `.append()` OR `.append()`: Appends the provided `` or `` to the end of ``. Example expression: `attributes.saml_attributes.filter(x, x.name in ['test']).append(attributes.iap_attributes.selectByName('exact').emitAs('custom').strict())`
     */
    expression?: string;
    /**
     * Which output credentials attributes selected by the CEL expression should be propagated in. All attributes will be fully duplicated in each selected output credential.
     */
    outputCredentials?: AttributePropagationSettingsOutputCredentialsEnum[];
}
