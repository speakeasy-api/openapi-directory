import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestCreateFieldRequestInput } from "./googleappsdrivelabelsv2deltaupdatelabelrequestcreatefieldrequest";
import { GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestCreateSelectionChoiceRequestInput } from "./googleappsdrivelabelsv2deltaupdatelabelrequestcreateselectionchoicerequest";
import { GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestDeleteFieldRequest } from "./googleappsdrivelabelsv2deltaupdatelabelrequestdeletefieldrequest";
import { GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestDeleteSelectionChoiceRequest } from "./googleappsdrivelabelsv2deltaupdatelabelrequestdeleteselectionchoicerequest";
import { GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestDisableFieldRequest } from "./googleappsdrivelabelsv2deltaupdatelabelrequestdisablefieldrequest";
import { GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestDisableSelectionChoiceRequest } from "./googleappsdrivelabelsv2deltaupdatelabelrequestdisableselectionchoicerequest";
import { GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestEnableFieldRequest } from "./googleappsdrivelabelsv2deltaupdatelabelrequestenablefieldrequest";
import { GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestEnableSelectionChoiceRequest } from "./googleappsdrivelabelsv2deltaupdatelabelrequestenableselectionchoicerequest";
import { GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestUpdateFieldPropertiesRequest } from "./googleappsdrivelabelsv2deltaupdatelabelrequestupdatefieldpropertiesrequest";
import { GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestUpdateFieldTypeRequestInput } from "./googleappsdrivelabelsv2deltaupdatelabelrequestupdatefieldtyperequest";
import { GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestUpdateLabelPropertiesRequest } from "./googleappsdrivelabelsv2deltaupdatelabelrequestupdatelabelpropertiesrequest";
import { GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestUpdateSelectionChoicePropertiesRequest } from "./googleappsdrivelabelsv2deltaupdatelabelrequestupdateselectionchoicepropertiesrequest";
/**
 * A single kind of update to apply to a Label.
 */
export declare class GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestRequestInput extends SpeakeasyBase {
    /**
     * Request to create a Field within a Label.
     */
    createField?: GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestCreateFieldRequestInput;
    /**
     * Request to create a Selection Choice.
     */
    createSelectionChoice?: GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestCreateSelectionChoiceRequestInput;
    /**
     * Request to delete the Field.
     */
    deleteField?: GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestDeleteFieldRequest;
    /**
     * Request to delete a Choice.
     */
    deleteSelectionChoice?: GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestDeleteSelectionChoiceRequest;
    /**
     * Request to disable the Field.
     */
    disableField?: GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestDisableFieldRequest;
    /**
     * Request to disable a Choice.
     */
    disableSelectionChoice?: GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestDisableSelectionChoiceRequest;
    /**
     * Request to enable the Field.
     */
    enableField?: GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestEnableFieldRequest;
    /**
     * Request to enable a Choice.
     */
    enableSelectionChoice?: GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestEnableSelectionChoiceRequest;
    /**
     * Request to update Field properties.
     */
    updateField?: GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestUpdateFieldPropertiesRequest;
    /**
     * Request to change the type of a Field.
     */
    updateFieldType?: GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestUpdateFieldTypeRequestInput;
    /**
     * Updates basic properties of a Label.
     */
    updateLabel?: GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestUpdateLabelPropertiesRequest;
    /**
     * Request to update a Choice properties.
     */
    updateSelectionChoiceProperties?: GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestUpdateSelectionChoicePropertiesRequest;
}
