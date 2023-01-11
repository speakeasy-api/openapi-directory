import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostBenefitsDocumentUploadSecurity extends SpeakeasyBase {
    apikey: shared.SchemeApikey;
}
export declare class PostBenefitsDocumentUpload202ApplicationJson extends SpeakeasyBase {
    data: any;
}
export declare class PostBenefitsDocumentUpload401ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PostBenefitsDocumentUpload403ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PostBenefitsDocumentUpload422ApplicationJson extends SpeakeasyBase {
    errors: any[];
}
export declare class PostBenefitsDocumentUpload429ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PostBenefitsDocumentUpload500ApplicationJson extends SpeakeasyBase {
    code?: string;
    detail?: string;
    status?: string;
    title?: string;
}
export declare class PostBenefitsDocumentUploadRequest extends SpeakeasyBase {
    security: PostBenefitsDocumentUploadSecurity;
}
export declare class PostBenefitsDocumentUploadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    postBenefitsDocumentUpload202ApplicationJSONObject?: PostBenefitsDocumentUpload202ApplicationJson;
    postBenefitsDocumentUpload401ApplicationJSONObject?: PostBenefitsDocumentUpload401ApplicationJson;
    postBenefitsDocumentUpload403ApplicationJSONObject?: PostBenefitsDocumentUpload403ApplicationJson;
    postBenefitsDocumentUpload422ApplicationJSONObject?: PostBenefitsDocumentUpload422ApplicationJson;
    postBenefitsDocumentUpload429ApplicationJSONObject?: PostBenefitsDocumentUpload429ApplicationJson;
    postBenefitsDocumentUpload500ApplicationJSONObject?: PostBenefitsDocumentUpload500ApplicationJson;
}
