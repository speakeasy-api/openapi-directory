import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The additional pay rate model
 */
export declare class AdditionalRate extends SpeakeasyBase {
    /**
     * Not required. If populated, must match one of the system coded values available in the Additional Rates Change Reason drop down.<br />
     */
    changeReason?: string;
    /**
     * Not required. Valid values must match one of the system coded cost centers available in the Additional Rates Cost Center level 1 drop down. This cell must be in a text format.<br />
     */
    costCenter1?: string;
    /**
     * Not required. Valid values must match one of the system coded cost centers available in the Additional Rates Cost Center level 2 drop down. This cell must be in a text format.<br />
     */
    costCenter2?: string;
    /**
     * Not required. Valid values must match one of the system coded cost centers available in the Additional Rates Cost Center level 3 drop down. This cell must be in a text format.<br />
     */
    costCenter3?: string;
    /**
     * Required. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.<br />
     */
    effectiveDate?: string;
    /**
     * Not required. Must match one of the system coded check dates available in the Additional Rates End Check Date drop down. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.<br />
     */
    endCheckDate?: string;
    /**
     * Not required. If populated, must match one of the system coded values available in the Additional Rates Job drop down.<br />
     */
    job?: string;
    /**
     * Required. Enter dollar amount that corresponds to the Per selection.<br />
     */
    rate?: number;
    /**
     * Required. If populated, must match one of the system coded values available in the Additional Rates Rate Code drop down.<br />
     */
    rateCode?: string;
    /**
     * Not required.<br  />Max length: 4000<br />
     */
    rateNotes?: string;
    /**
     * Required. Valid values are HOUR or WEEK.<br />
     */
    ratePer?: string;
    /**
     * Not required. If populated, must match one of the system coded values available in the Additional Rates Shift drop down.<br />
     */
    shift?: string;
}
