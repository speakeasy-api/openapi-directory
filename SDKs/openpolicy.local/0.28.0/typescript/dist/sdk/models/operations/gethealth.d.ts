import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetHealthRequest extends SpeakeasyBase {
    /**
     * Reports on bundle activation status (useful for 'ready' checks at startup).
     *
     * @remarks
     *
     * This includes any discovery bundles or bundles defined in the loaded discovery configuration.
     */
    bundles?: boolean;
    /**
     * Reports on plugin status
     */
    plugins?: boolean;
}
export declare class GetHealthResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
