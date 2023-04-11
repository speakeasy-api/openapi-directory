import { SpeakeasyBase } from "../../../internal/utils";
import { NestedUser } from "./nesteduser";
export declare enum ObjectChangeActionEnum {
    One = "1",
    Two = "2",
    Three = "3"
}
export declare class ObjectChange extends SpeakeasyBase {
    action: ObjectChangeActionEnum;
    changedObject?: string;
    contentType?: string;
    id?: number;
    objectData?: string;
    requestId?: string;
    time?: Date;
    user?: NestedUser;
    userName?: string;
}
