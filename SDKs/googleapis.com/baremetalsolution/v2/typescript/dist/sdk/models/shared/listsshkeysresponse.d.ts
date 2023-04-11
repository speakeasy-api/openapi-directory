import { SpeakeasyBase } from "../../../internal/utils";
import { SSHKey } from "./sshkey";
/**
 * Message for response of ListSSHKeys.
 */
export declare class ListSSHKeysResponse extends SpeakeasyBase {
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string;
    /**
     * The SSH keys registered in the project.
     */
    sshKeys?: SSHKey[];
}
