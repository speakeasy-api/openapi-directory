import { SpeakeasyBase } from "../../../internal/utils";
import { Document } from "./document";
import { Mark } from "./mark";
export declare class SubmissionMarkResponse extends SpeakeasyBase {
    assessmentId?: string;
    assessmentItemDetails?: string;
    assessmentItemName?: string;
    courseName?: string;
    files?: Document[];
    html?: string;
    learnerEmail?: string;
    learnerFirstName?: string;
    learnerLastName?: string;
    learnerPersonId?: string;
    marks?: Mark[];
    status?: string;
    submissionDateTime?: Date;
}
