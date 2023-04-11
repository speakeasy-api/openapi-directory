import { SpeakeasyBase } from "../../../internal/utils";
import { NAWelcomeGlobalInfo } from "./nawelcomeglobalinfo";
import { NAWelcomeHome } from "./nawelcomehome";
import { NAWelcomeUser } from "./nawelcomeuser";
export declare class NAWelcomeHomeData extends SpeakeasyBase {
    globalInfo?: NAWelcomeGlobalInfo;
    homes?: NAWelcomeHome[];
    user?: NAWelcomeUser;
}
