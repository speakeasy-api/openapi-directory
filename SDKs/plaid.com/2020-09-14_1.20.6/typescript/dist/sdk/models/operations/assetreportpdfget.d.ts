import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AssetReportPdfGetRequest extends SpeakeasyBase {
    request: shared.AssetReportPdfGetRequest;
}
export declare class AssetReportPdfGetResponse extends SpeakeasyBase {
    assetReportPDFGetResponse?: Uint8Array;
    contentType: string;
    statusCode: number;
}
