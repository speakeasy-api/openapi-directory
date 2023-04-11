import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseResponse } from "./googleappsdrivelabelsv2betadeltaupdatelabelresponseresponse";
import { GoogleAppsDriveLabelsV2betaLabel } from "./googleappsdrivelabelsv2betalabel";
/**
 * Response for Label update.
 */
export declare class GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponse extends SpeakeasyBase {
    /**
     * The reply of the updates. This maps 1:1 with the updates, although responses to some requests may be empty.
     */
    responses?: GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseResponse[];
    /**
     * A label defines a taxonomy that can be applied to Drive items in order to organize and search across items. Labels can be simple strings, or can contain fields that describe additional metadata that can be further used to organize and search Drive items.
     */
    updatedLabel?: GoogleAppsDriveLabelsV2betaLabel;
}
