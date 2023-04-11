import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostAssetsReturnsSimulationBootstrapRequestBodyAssets extends SpeakeasyBase {
    /**
     * assetReturns[t] is the return of the asset over the time period t; all the assetReturns arrays must have the same length
     */
    assetReturns: number[];
}
/**
 * The bootstrap method to use
 */
export declare enum PostAssetsReturnsSimulationBootstrapRequestBodyBootstrapMethodEnum {
    Iid = "iid",
    CircularBlock = "circularBlock",
    StationaryBlock = "stationaryBlock"
}
export declare class PostAssetsReturnsSimulationBootstrapRequestBody extends SpeakeasyBase {
    assets: PostAssetsReturnsSimulationBootstrapRequestBodyAssets[];
    /**
     * The average length of the blocks to use in case the bootstrap method is 'stationaryBlock', in time periods; if not provided, defaults to the inverse of 3.15 * the common length of the assetReturns arrays^1/3
     */
    bootstrapAverageBlockLength?: number;
    /**
     * The length of the blocks to use in case the bootstrap method is 'circularBlock', in time periods; if not provided, defaults to [3.15 * the common length of the assetReturns arrays^1/3]
     */
    bootstrapBlockLength?: number;
    /**
     * The bootstrap method to use
     */
    bootstrapMethod?: PostAssetsReturnsSimulationBootstrapRequestBodyBootstrapMethodEnum;
    /**
     * The number of simulations to perform
     */
    simulations?: number;
    /**
     * The number of time period(s) to simulate per simulation; if not provided, defaults to the common length of the assetReturns arrays
     */
    simulationsLength?: number;
}
export declare class PostAssetsReturnsSimulationBootstrap200ApplicationJSONSimulationsAssets extends SpeakeasyBase {
    /**
     * assetReturns[t] is the simulated return of the i-th asset for the t-th time period, in percentage
     */
    assetReturns: number[];
}
export declare class PostAssetsReturnsSimulationBootstrap200ApplicationJSONSimulations extends SpeakeasyBase {
    /**
     * assets[i] is the data for the i-th asset
     */
    assets: PostAssetsReturnsSimulationBootstrap200ApplicationJSONSimulationsAssets[];
}
/**
 * OK
 */
export declare class PostAssetsReturnsSimulationBootstrap200ApplicationJSON extends SpeakeasyBase {
    simulations: PostAssetsReturnsSimulationBootstrap200ApplicationJSONSimulations[];
}
export declare class PostAssetsReturnsSimulationBootstrapResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    postAssetsReturnsSimulationBootstrap200ApplicationJSONObject?: PostAssetsReturnsSimulationBootstrap200ApplicationJSON;
}
