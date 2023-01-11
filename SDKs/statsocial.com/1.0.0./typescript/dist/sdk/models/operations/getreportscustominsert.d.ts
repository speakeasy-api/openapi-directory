import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetReportsCustomInsertQueryParams extends SpeakeasyBase {
    ids: any[];
    uploadHash: string;
}
export declare class GetReportsCustomInsertRequest extends SpeakeasyBase {
    queryParams: GetReportsCustomInsertQueryParams;
}
export declare class GetReportsCustomInsertResponse extends SpeakeasyBase {
    fourHundredError?: any;
    fourHundredAndOneError?: any;
    fourHundredAndThreeError?: any;
    fourHundredAndFourError?: any;
    fiveHundredError?: any;
    contentType: string;
    customInsert?: any;
    statusCode: number;
}
