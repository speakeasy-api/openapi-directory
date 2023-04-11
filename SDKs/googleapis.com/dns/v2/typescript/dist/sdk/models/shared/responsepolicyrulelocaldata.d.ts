import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceRecordSet } from "./resourcerecordset";
export declare class ResponsePolicyRuleLocalData extends SpeakeasyBase {
    /**
     * All resource record sets for this selector, one per resource record type. The name must match the dns_name.
     */
    localDatas?: ResourceRecordSet[];
}
