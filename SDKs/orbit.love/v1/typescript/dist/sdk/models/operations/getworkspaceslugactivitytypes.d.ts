import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetWorkspaceSlugActivityTypesSecurity extends SpeakeasyBase {
    bearer: string;
}
export declare class GetWorkspaceSlugActivityTypesRequest extends SpeakeasyBase {
    workspaceSlug: string;
}
export declare class GetWorkspaceSlugActivityTypesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
