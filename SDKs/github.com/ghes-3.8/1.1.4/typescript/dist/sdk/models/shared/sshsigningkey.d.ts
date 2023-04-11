import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A public SSH key used to sign Git commits
 */
export declare class SshSigningKey extends SpeakeasyBase {
    createdAt: Date;
    id: number;
    key: string;
    title: string;
}
