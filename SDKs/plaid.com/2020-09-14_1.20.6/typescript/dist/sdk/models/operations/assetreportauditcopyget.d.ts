import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AssetReportAuditCopyGetRequest extends SpeakeasyBase {
    request: shared.AssetReportAuditCopyGetRequest;
}
export declare class AssetReportAuditCopyGetResponse extends SpeakeasyBase {
    assetReportGetResponse?: Record<string, any>;
    contentType: string;
    statusCode: number;
}
