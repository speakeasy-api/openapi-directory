import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class MobilegentilejsonV2LocationsTilesMobileGeneralizedTilesJsonGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Return a tilejson
     */
    tileJSON?: shared.TileJSON;
}
