import { SpeakeasyBase } from "../../../internal/utils";
import { ContainerVersion } from "./containerversion";
import { ContainerVersionHeader } from "./containerversionheader";
/**
 * List container versions response.
 */
export declare class ListContainerVersionsResponse extends SpeakeasyBase {
    /**
     * All versions of a GTM Container.
     */
    containerVersion?: ContainerVersion[];
    /**
     * All container version headers of a GTM Container.
     */
    containerVersionHeader?: ContainerVersionHeader[];
}
