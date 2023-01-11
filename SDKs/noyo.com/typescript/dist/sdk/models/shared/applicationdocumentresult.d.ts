import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ApplicationDocumentResultStatusEnum {
    Accepted = "accepted",
    InProgress = "in_progress",
    Incomplete = "incomplete",
    NoyoReview = "noyo_review",
    Rejected = "rejected",
    Submitted = "submitted",
    Wiped = "wiped"
}
export declare class ApplicationDocumentResult extends SpeakeasyBase {
    applicationId: string;
    created: number;
    documentType: string;
    fileUploadId?: string;
    id: string;
    modified: number;
    name: string;
    notes: string;
    required: boolean;
    status: ApplicationDocumentResultStatusEnum;
    statusNotes: string;
    templateFileKey: string;
    version: string;
}
