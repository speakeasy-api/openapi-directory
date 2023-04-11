import { SpeakeasyBase } from "../../../internal/utils";
import { BookingFieldListItemViewModel } from "./bookingfieldlistitemviewmodel";
export declare class BookingFieldViewModel extends SpeakeasyBase {
    businessId?: string;
    companyId?: string;
    fieldLabel?: string;
    fieldLength?: number;
    fieldListItems?: BookingFieldListItemViewModel[];
    fieldName?: string;
    fieldRequired?: boolean;
    fieldType?: string;
    id?: string;
    leadQuestion?: boolean;
    leadQuestionWeight?: number;
    object?: string;
    sortKey?: number;
}
