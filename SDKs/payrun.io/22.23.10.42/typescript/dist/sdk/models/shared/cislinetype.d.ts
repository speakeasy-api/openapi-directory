import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The cis line types' nominal code
 */
export declare class CisLineTypeCisLineTypeNominalCode extends SpeakeasyBase {
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
 * The cis line types' tax treatment
 */
export declare enum CisLineTypeCisLineTypeTaxTreatmentEnum {
    Taxable = "Taxable",
    NonTaxable = "NonTaxable",
    Notional = "Notional",
    Materials = "Materials"
}
export declare class CisLineTypeCisLineType extends SpeakeasyBase {
    /**
     * The cis line types' description
     */
    description?: string;
    /**
     * The cis line types' line type
     */
    lineType?: string;
    /**
     * The cis line types' nominal code
     */
    nominalCode?: CisLineTypeCisLineTypeNominalCode;
    /**
     * The cis line types' tax treatment
     */
    taxTreatment?: CisLineTypeCisLineTypeTaxTreatmentEnum;
}
/**
 * The cis line type object.
 */
export declare class CisLineType extends SpeakeasyBase {
    cisLineType?: CisLineTypeCisLineType;
}
