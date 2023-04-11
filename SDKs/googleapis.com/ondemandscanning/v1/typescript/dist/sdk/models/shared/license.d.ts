import { SpeakeasyBase } from "../../../internal/utils";
/**
 * License information.
 */
export declare class License extends SpeakeasyBase {
    /**
     * Comments
     */
    comments?: string;
    /**
     * Often a single license can be used to represent the licensing terms. Sometimes it is necessary to include a choice of one or more licenses or some combination of license identifiers. Examples: "LGPL-2.1-only OR MIT", "LGPL-2.1-only AND MIT", "GPL-2.0-or-later WITH Bison-exception-2.2".
     */
    expression?: string;
}
