import { SpeakeasyBase } from "../../../internal/utils";
import { CollectionOverride } from "./collectionoverride";
import { Credential } from "./credential";
import { Operation } from "./operation";
import { Options } from "./options";
import { TypeProviderLabelEntry } from "./typeproviderlabelentry";
/**
 * A type provider that describes a service-backed Type.
 */
export declare class TypeProvider extends SpeakeasyBase {
    /**
     * Allows resource handling overrides for specific collections
     */
    collectionOverrides?: CollectionOverride[];
    /**
     * The credential used by Deployment Manager and TypeProvider. Only one of the options is permitted.
     */
    credential?: Credential;
    /**
     * List of up to 2 custom certificate authority roots to use for TLS authentication when making calls on behalf of this type provider. If set, TLS authentication will exclusively use these roots instead of relying on publicly trusted certificate authorities when validating TLS certificate authenticity. The certificates must be in base64-encoded PEM format. The maximum size of each certificate must not exceed 10KB.
     */
    customCertificateAuthorityRoots?: string[];
    /**
     * An optional textual description of the resource; provided by the client when the resource is created.
     */
    description?: string;
    /**
     * Descriptor Url for the this type provider.
     */
    descriptorUrl?: string;
    /**
     * Output only. Unique identifier for the resource defined by the server.
     */
    id?: string;
    /**
     * Output only. Creation timestamp in RFC3339 text format.
     */
    insertTime?: string;
    /**
     * Map of One Platform labels; provided by the client when the resource is created or updated. Specifically: Label keys must be between 1 and 63 characters long and must conform to the following regular expression: `[a-z]([-a-z0-9]*[a-z0-9])?` Label values must be between 0 and 63 characters long and must conform to the regular expression `([a-z]([-a-z0-9]*[a-z0-9])?)?`
     */
    labels?: TypeProviderLabelEntry[];
    /**
     * Name of the resource; provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
     */
    name?: string;
    /**
     * Represents an Operation resource. Google Compute Engine has three Operation resources: * [Global](/compute/docs/reference/rest/{$api_version}/globalOperations) * [Regional](/compute/docs/reference/rest/{$api_version}/regionOperations) * [Zonal](/compute/docs/reference/rest/{$api_version}/zoneOperations) You can use an operation resource to manage asynchronous API requests. For more information, read Handling API responses. Operations can be global, regional or zonal. - For global operations, use the `globalOperations` resource. - For regional operations, use the `regionOperations` resource. - For zonal operations, use the `zonalOperations` resource. For more information, read Global, Regional, and Zonal Resources.
     */
    operation?: Operation;
    /**
     * Options allows customized resource handling by Deployment Manager.
     */
    options?: Options;
    /**
     * Output only. Self link for the type provider.
     */
    selfLink?: string;
}
