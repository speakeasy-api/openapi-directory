import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2InfoType } from "./googleprivacydlpv2infotype";
import { GooglePrivacyDlpV2PrimitiveTransformation } from "./googleprivacydlpv2primitivetransformation";
/**
 * A transformation to apply to text that is identified as a specific info_type.
 */
export declare class GooglePrivacyDlpV2InfoTypeTransformation extends SpeakeasyBase {
    /**
     * InfoTypes to apply the transformation to. An empty list will cause this transformation to apply to all findings that correspond to infoTypes that were requested in `InspectConfig`.
     */
    infoTypes?: GooglePrivacyDlpV2InfoType[];
    /**
     * A rule for transforming a value.
     */
    primitiveTransformation?: GooglePrivacyDlpV2PrimitiveTransformation;
}
