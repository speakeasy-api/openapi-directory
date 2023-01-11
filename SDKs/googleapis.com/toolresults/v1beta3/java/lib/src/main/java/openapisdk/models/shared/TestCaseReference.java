package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TestCaseReference
 * A reference to a test case. Test case references are canonically ordered lexicographically by these three factors: * First, by test_suite_name. * Second, by class_name. * Third, by name.
**/
public class TestCaseReference {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("className")
    public String className;
    public TestCaseReference withClassName(String className) {
        this.className = className;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public TestCaseReference withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("testSuiteName")
    public String testSuiteName;
    public TestCaseReference withTestSuiteName(String testSuiteName) {
        this.testSuiteName = testSuiteName;
        return this;
    }
}