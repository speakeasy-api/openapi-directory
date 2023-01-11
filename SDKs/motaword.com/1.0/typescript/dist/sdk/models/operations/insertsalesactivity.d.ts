import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class InsertSalesActivityPathParams extends SpeakeasyBase {
    id: number;
}
export declare class InsertSalesActivityRequestBody extends SpeakeasyBase {
    subject?: string;
    timestamp?: number;
    type?: string;
}
export declare class InsertSalesActivityRequest extends SpeakeasyBase {
    pathParams: InsertSalesActivityPathParams;
    request?: InsertSalesActivityRequestBody;
}
export declare class InsertSalesActivityResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    operationStatus?: shared.OperationStatus;
    statusCode: number;
}
