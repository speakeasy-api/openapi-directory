import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetOntolLabelerResourceQueryParams extends SpeakeasyBase {
    id?: string[];
}
export declare class GetOntolLabelerResourceRequest extends SpeakeasyBase {
    queryParams: GetOntolLabelerResourceQueryParams;
}
export declare class GetOntolLabelerResourceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
