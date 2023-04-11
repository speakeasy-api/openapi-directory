import { SpeakeasyBase } from "../../../internal/utils";
import { Document } from "./document";
import { Mark } from "./mark";
export declare class Assignments extends SpeakeasyBase {
    files?: Document[];
    marks?: Mark[];
    status?: string;
    submittedAt?: Date;
    updatedAt?: Date;
}
