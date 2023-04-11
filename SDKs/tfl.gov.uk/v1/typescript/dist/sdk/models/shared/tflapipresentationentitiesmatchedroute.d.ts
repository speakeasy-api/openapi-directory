import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Description of a Route used in Route search results.
 */
export declare class TflApiPresentationEntitiesMatchedRoute extends SpeakeasyBase {
    /**
     * The Id (NaPTAN code) or the Destination StopPoint
     */
    destination?: string;
    /**
     * The name of the Destination StopPoint
     */
    destinationName?: string;
    /**
     * Inbound or Outbound
     */
    direction?: string;
    /**
     * Name such as "72"
     */
    name?: string;
    /**
     * The name of the Origin StopPoint
     */
    originationName?: string;
    /**
     * The Id (NaPTAN code) of the Origin StopPoint
     */
    originator?: string;
    /**
     * The route code
     */
    routeCode?: string;
    /**
     * Regular or Night
     */
    serviceType?: string;
    /**
     * The DateTime that the Service containing this Route is valid from.
     */
    validFrom?: Date;
    /**
     * The DateTime that the Service containing this Route is valid until.
     */
    validTo?: Date;
}
