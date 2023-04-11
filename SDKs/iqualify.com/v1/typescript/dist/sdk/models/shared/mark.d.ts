import { SpeakeasyBase } from "../../../internal/utils";
import { MarkFeedback } from "./markfeedback";
export declare class Mark extends SpeakeasyBase {
    createdAt?: Date;
    feedback?: string;
    id?: string;
    mark?: string;
    markFeedback?: MarkFeedback[];
    markedBy?: string;
    markerId?: string;
}
