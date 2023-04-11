import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 *     The signature type for the custom pie chart item. Can be one of 'host', 'port' or 'ipRange'.
 *
 * @remarks
 *
 */
export declare enum UpdateNetworkTrafficAnalysisRequestBodyCustomPieChartItemsTypeEnum {
    Host = "host",
    IpRange = "ipRange",
    Port = "port"
}
export declare class UpdateNetworkTrafficAnalysisRequestBodyCustomPieChartItems extends SpeakeasyBase {
    /**
     * The name of the custom pie chart item.
     */
    name: string;
    /**
     *     The signature type for the custom pie chart item. Can be one of 'host', 'port' or 'ipRange'.
     *
     * @remarks
     *
     */
    type: UpdateNetworkTrafficAnalysisRequestBodyCustomPieChartItemsTypeEnum;
    /**
     *     The value of the custom pie chart item. Valid syntax depends on the signature type of the chart item
     *
     * @remarks
     *     (see sample request/response for more details).
     *
     */
    value: string;
}
/**
 *     The traffic analysis mode for the network. Can be one of 'disabled' (do not collect traffic types),
 *
 * @remarks
 *     'basic' (collect generic traffic categories), or 'detailed' (collect destination hostnames).
 *
 */
export declare enum UpdateNetworkTrafficAnalysisRequestBodyModeEnum {
    Basic = "basic",
    Detailed = "detailed",
    Disabled = "disabled"
}
export declare class UpdateNetworkTrafficAnalysisRequestBody extends SpeakeasyBase {
    /**
     * The list of items that make up the custom pie chart for traffic reporting.
     */
    customPieChartItems?: UpdateNetworkTrafficAnalysisRequestBodyCustomPieChartItems[];
    /**
     *     The traffic analysis mode for the network. Can be one of 'disabled' (do not collect traffic types),
     *
     * @remarks
     *     'basic' (collect generic traffic categories), or 'detailed' (collect destination hostnames).
     *
     */
    mode?: UpdateNetworkTrafficAnalysisRequestBodyModeEnum;
}
export declare class UpdateNetworkTrafficAnalysisRequest extends SpeakeasyBase {
    requestBody?: UpdateNetworkTrafficAnalysisRequestBody;
    networkId: string;
}
export declare class UpdateNetworkTrafficAnalysisResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateNetworkTrafficAnalysis200ApplicationJSONObject?: Record<string, any>;
}
