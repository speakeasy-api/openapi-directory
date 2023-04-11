import { SpeakeasyBase } from "../../../internal/utils";
import { Attributes } from "./attributes";
import { Data } from "./data";
import { TypeEnum } from "./typeenum";
export declare class UpdateCalendarEventRequestDataRelationshipsOwner extends SpeakeasyBase {
    data?: Data;
}
export declare class UpdateCalendarEventRequestDataRelationships extends SpeakeasyBase {
    owner?: UpdateCalendarEventRequestDataRelationshipsOwner;
}
export declare class UpdateCalendarEventRequestData extends SpeakeasyBase {
    attributes?: Attributes;
    id: string;
    relationships?: UpdateCalendarEventRequestDataRelationships;
    type: TypeEnum;
}
export declare class UpdateCalendarEventRequest extends SpeakeasyBase {
    data?: UpdateCalendarEventRequestData;
}
