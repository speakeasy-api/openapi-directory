import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An optional set of options to be used when configuring the Item. If specified, must not be `null`.
 */
export declare class SandboxProcessorTokenCreateRequestOptions extends SpeakeasyBase {
    /**
     * Test password to use for the creation of the Sandbox Item. Default value is `pass_good`.
     */
    overridePassword?: string;
    /**
     * Test username to use for the creation of the Sandbox Item. Default value is `user_good`.
     */
    overrideUsername?: string;
}
