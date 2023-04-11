import { SpeakeasyBase } from "../../../internal/utils";
import { AppContext } from "./appcontext";
import { AuctionContext } from "./auctioncontext";
import { LocationContext } from "./locationcontext";
import { PlatformContext } from "./platformcontext";
import { SecurityContext } from "./securitycontext";
/**
 * Matches all contexts.
 */
export declare enum ServingContextAllEnum {
    SimpleContext = "SIMPLE_CONTEXT"
}
/**
 * The serving context for this restriction.
 */
export declare class ServingContext extends SpeakeasyBase {
    /**
     * Matches all contexts.
     */
    all?: ServingContextAllEnum;
    /**
     * Output only. The app type the restriction applies to for mobile device.
     */
    appType?: AppContext;
    /**
     * Output only. The auction type the restriction applies to.
     */
    auctionType?: AuctionContext;
    /**
     * Output only. The Geo criteria the restriction applies to.
     */
    location?: LocationContext;
    /**
     * Output only. The type of platform the restriction applies to.
     */
    platform?: PlatformContext;
    /**
     * Output only. A security context.
     */
    securityType?: SecurityContext;
}
