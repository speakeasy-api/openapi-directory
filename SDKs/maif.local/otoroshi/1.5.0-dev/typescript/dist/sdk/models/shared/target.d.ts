import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A Target is where an HTTP call will be forwarded in the end from a service domain
 */
export declare class Target extends SpeakeasyBase {
    /**
     * The host on which the HTTP call will be forwarded. Can be a domain name, or an IP address. Can also have a port
     */
    host: string;
    /**
     * The protocol used for communication. Can be http or https
     */
    scheme: string;
}
