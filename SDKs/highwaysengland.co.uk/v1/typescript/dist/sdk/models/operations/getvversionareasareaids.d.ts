import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetVVersionAreasAreaIdsRequest extends SpeakeasyBase {
    areaIds: string;
    version: string;
}
export declare class GetVVersionAreasAreaIdsResponse extends SpeakeasyBase {
    areaResponse?: shared.AreaResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
