import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListMoodsSecurity extends SpeakeasyBase {
    basic?: shared.SchemeBasic;
    customerAccessCode?: shared.SchemeCustomerAccessCode;
}
export declare class ListMoodsRequest extends SpeakeasyBase {
    security: ListMoodsSecurity;
}
export declare class ListMoodsResponse extends SpeakeasyBase {
    contentType: string;
    moodList?: shared.MoodList;
    statusCode: number;
}
