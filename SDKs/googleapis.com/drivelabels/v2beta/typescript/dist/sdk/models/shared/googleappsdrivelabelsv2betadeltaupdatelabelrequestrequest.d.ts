import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestCreateFieldRequestInput } from "./googleappsdrivelabelsv2betadeltaupdatelabelrequestcreatefieldrequest";
import { GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestCreateSelectionChoiceRequestInput } from "./googleappsdrivelabelsv2betadeltaupdatelabelrequestcreateselectionchoicerequest";
import { GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDeleteFieldRequest } from "./googleappsdrivelabelsv2betadeltaupdatelabelrequestdeletefieldrequest";
import { GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDeleteSelectionChoiceRequest } from "./googleappsdrivelabelsv2betadeltaupdatelabelrequestdeleteselectionchoicerequest";
import { GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDisableFieldRequest } from "./googleappsdrivelabelsv2betadeltaupdatelabelrequestdisablefieldrequest";
import { GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDisableSelectionChoiceRequest } from "./googleappsdrivelabelsv2betadeltaupdatelabelrequestdisableselectionchoicerequest";
import { GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestEnableFieldRequest } from "./googleappsdrivelabelsv2betadeltaupdatelabelrequestenablefieldrequest";
import { GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestEnableSelectionChoiceRequest } from "./googleappsdrivelabelsv2betadeltaupdatelabelrequestenableselectionchoicerequest";
import { GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateFieldPropertiesRequest } from "./googleappsdrivelabelsv2betadeltaupdatelabelrequestupdatefieldpropertiesrequest";
import { GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateFieldTypeRequestInput } from "./googleappsdrivelabelsv2betadeltaupdatelabelrequestupdatefieldtyperequest";
import { GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateLabelPropertiesRequest } from "./googleappsdrivelabelsv2betadeltaupdatelabelrequestupdatelabelpropertiesrequest";
import { GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateSelectionChoicePropertiesRequest } from "./googleappsdrivelabelsv2betadeltaupdatelabelrequestupdateselectionchoicepropertiesrequest";
/**
 * A single kind of update to apply to a Label.
 */
export declare class GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestRequestInput extends SpeakeasyBase {
    /**
     * Request to create a Field within a Label.
     */
    createField?: GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestCreateFieldRequestInput;
    /**
     * Request to create a Selection Choice.
     */
    createSelectionChoice?: GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestCreateSelectionChoiceRequestInput;
    /**
     * Request to delete the Field.
     */
    deleteField?: GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDeleteFieldRequest;
    /**
     * Request to delete a Choice.
     */
    deleteSelectionChoice?: GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDeleteSelectionChoiceRequest;
    /**
     * Request to disable the Field.
     */
    disableField?: GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDisableFieldRequest;
    /**
     * Request to disable a Choice.
     */
    disableSelectionChoice?: GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDisableSelectionChoiceRequest;
    /**
     * Request to enable the Field.
     */
    enableField?: GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestEnableFieldRequest;
    /**
     * Request to enable a Choice.
     */
    enableSelectionChoice?: GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestEnableSelectionChoiceRequest;
    /**
     * Request to update Field properties.
     */
    updateField?: GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateFieldPropertiesRequest;
    /**
     * Request to change the type of a Field.
     */
    updateFieldType?: GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateFieldTypeRequestInput;
    /**
     * Updates basic properties of a Label.
     */
    updateLabel?: GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateLabelPropertiesRequest;
    /**
     * Request to update a Choice properties.
     */
    updateSelectionChoiceProperties?: GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateSelectionChoicePropertiesRequest;
}
