import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Test targets for a shard.
 */
export declare class TestTargetsForShard extends SpeakeasyBase {
    /**
     * Group of packages, classes, and/or test methods to be run for each shard. The targets need to be specified in AndroidJUnitRunner argument format. For example, "package com.my.packages" "class com.my.package.MyClass". The number of test_targets must be greater than 0.
     */
    testTargets?: string[];
}
