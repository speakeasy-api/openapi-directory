import { SpeakeasyBase } from "../../../internal/utils";
import { IdentifierTypeEnum } from "./identifiertypeenum";
import { TaxableEntityTypeEnum } from "./taxableentitytypeenum";
/**
 * A tax identifier object
 */
export declare class TaxIdentifier extends SpeakeasyBase {
    identifierType: IdentifierTypeEnum;
    /**
     * The authority that issued this tax. This must be a valid 2 character ISO 3166 Alpha 2 country code.
     */
    issuingAuthority: string;
    taxableEntityType: TaxableEntityTypeEnum;
    /**
     * The value of the identifier
     */
    value: string;
}
