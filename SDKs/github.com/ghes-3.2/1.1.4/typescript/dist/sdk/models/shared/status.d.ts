import { SpeakeasyBase } from "../../../internal/utils";
import { NullableSimpleUser } from "./nullablesimpleuser";
/**
 * The status of a commit.
 */
export declare class Status extends SpeakeasyBase {
    avatarUrl: string;
    context: string;
    createdAt: string;
    /**
     * Simple User
     */
    creator: NullableSimpleUser;
    description: string;
    id: number;
    nodeId: string;
    state: string;
    targetUrl: string;
    updatedAt: string;
    url: string;
}
