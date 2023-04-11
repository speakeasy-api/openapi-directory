import { SpeakeasyBase } from "../../../internal/utils";
import { HttpRouteRouteAction } from "./httprouterouteaction";
import { HttpRouteRouteMatch } from "./httprouteroutematch";
/**
 * Specifies how to match traffic and how to route traffic when traffic is matched.
 */
export declare class HttpRouteRouteRule extends SpeakeasyBase {
    /**
     * The specifications for routing traffic and applying associated policies.
     */
    action?: HttpRouteRouteAction;
    /**
     * A list of matches define conditions used for matching the rule against incoming HTTP requests. Each match is independent, i.e. this rule will be matched if ANY one of the matches is satisfied. If no matches field is specified, this rule will unconditionally match traffic. If a default rule is desired to be configured, add a rule with no matches specified to the end of the rules list.
     */
    matches?: HttpRouteRouteMatch[];
}
