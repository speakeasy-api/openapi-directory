import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The pay codes' nominal code
 */
export declare class PayCodePayCodeNominalCode extends SpeakeasyBase {
    /**
     * The links' href
     */
    atHref?: string;
    /**
     * The links' target type
     */
    atRel?: string;
    /**
     * The links' title
     */
    atTitle?: string;
}
/**
 * The pay codes' region
 */
export declare enum PayCodePayCodeRegionEnum {
    NotSet = "NotSet",
    England = "England",
    Scotland = "Scotland",
    Wales = "Wales"
}
/**
 * The pay codes' territory
 */
export declare enum PayCodePayCodeTerritoryEnum {
    UnitedKingdom = "UnitedKingdom"
}
/**
 * The pay codes' type
 */
export declare enum PayCodePayCodeTypeEnum {
    NotSet = "NotSet",
    Payment = "Payment",
    Deduction = "Deduction"
}
export declare class PayCodePayCode extends SpeakeasyBase {
    /**
     * The pay codes' benefit
     */
    benefit?: boolean;
    /**
     * The pay codes' code
     */
    code?: string;
    /**
     * The pay codes' description
     */
    description?: string;
    /**
     * The pay codes' effective date
     */
    effectiveDate?: Date;
    /**
     * The pay codes' meta data
     */
    metaData?: Record<string, any>;
    /**
     * The pay codes' next revision date
     */
    nextRevisionDate?: Date;
    /**
     * The pay codes' niable
     */
    niable?: boolean;
    /**
     * The pay codes' nominal code
     */
    nominalCode?: PayCodePayCodeNominalCode;
    /**
     * The pay codes' non arrestable
     */
    nonArrestable?: boolean;
    /**
     * The pay codes' notional
     */
    notional?: boolean;
    /**
     * The pay codes' readonly
     */
    readonly?: boolean;
    /**
     * The pay codes' region
     */
    region?: PayCodePayCodeRegionEnum;
    /**
     * The pay codes' revision
     */
    revision?: number;
    /**
     * The pay codes' taxable
     */
    taxable?: boolean;
    /**
     * The pay codes' territory
     */
    territory?: PayCodePayCodeTerritoryEnum;
    /**
     * The pay codes' type
     */
    type?: PayCodePayCodeTypeEnum;
}
/**
 * The pay code object.
 */
export declare class PayCode extends SpeakeasyBase {
    payCode?: PayCodePayCode;
}
