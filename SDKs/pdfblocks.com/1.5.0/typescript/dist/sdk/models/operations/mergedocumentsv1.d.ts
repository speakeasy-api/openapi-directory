import { SpeakeasyBase } from "../../../internal/utils";
export declare class MergeDocumentsV1RequestBody extends SpeakeasyBase {
    file?: Uint8Array[];
}
export declare class MergeDocumentsV14XxApplicationProblemPlusJson extends SpeakeasyBase {
    errors?: Record<string, any>;
    status?: number;
    title?: string;
    type?: string;
}
export declare class MergeDocumentsV1Request extends SpeakeasyBase {
    request: MergeDocumentsV1RequestBody;
}
export declare class MergeDocumentsV1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    mergeDocumentsV1200ApplicationPdfBinaryString?: Uint8Array;
    mergeDocumentsV14XXApplicationProblemPlusJsonObject?: MergeDocumentsV14XxApplicationProblemPlusJson;
}
