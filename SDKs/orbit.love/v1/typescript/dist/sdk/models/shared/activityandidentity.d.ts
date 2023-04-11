import { SpeakeasyBase } from "../../../internal/utils";
import { Identity } from "./identity";
export declare class ActivityAndIdentity extends SpeakeasyBase {
    activity?: any;
    /**
     * Represents an email address, a profile on networks like github and twitter, or a record in another system.
     */
    identity?: Identity;
}
