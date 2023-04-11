import { SpeakeasyBase } from "../../../internal/utils";
import { Config } from "./config";
/**
 * Settings of how to connect to the ClientGateway. One of the following options should be set.
 */
export declare class Ingress extends SpeakeasyBase {
    /**
     * The basic ingress config for ClientGateways.
     */
    config?: Config;
}
