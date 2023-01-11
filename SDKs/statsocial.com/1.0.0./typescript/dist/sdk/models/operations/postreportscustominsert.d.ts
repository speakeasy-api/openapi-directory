import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostReportsCustomInsertQueryParams extends SpeakeasyBase {
    ids: any[];
    uploadHash: string;
}
export declare class PostReportsCustomInsertRequest extends SpeakeasyBase {
    queryParams: PostReportsCustomInsertQueryParams;
}
export declare class PostReportsCustomInsertResponse extends SpeakeasyBase {
    fourHundredError?: any;
    fourHundredAndOneError?: any;
    fourHundredAndThreeError?: any;
    fourHundredAndFourError?: any;
    fiveHundredError?: any;
    contentType: string;
    customInsert?: any;
    statusCode: number;
}
