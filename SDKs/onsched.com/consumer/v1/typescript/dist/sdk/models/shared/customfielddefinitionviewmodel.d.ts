import { SpeakeasyBase } from "../../../internal/utils";
import { CustomFieldListDefinitionViewModel } from "./customfieldlistdefinitionviewmodel";
export declare class CustomFieldDefinitionViewModel extends SpeakeasyBase {
    fieldKey?: string;
    fieldLabel?: string;
    fieldLength?: number;
    fieldListItems?: CustomFieldListDefinitionViewModel[];
    fieldName?: string;
    fieldPublic?: boolean;
    fieldRequired?: boolean;
    fieldType?: string;
    id?: string;
    leadQuestion?: boolean;
    leadQuestionWeight?: number;
    object?: string;
    sortKey?: number;
}
