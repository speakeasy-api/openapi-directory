package openapisdk.models.shared;



public class Result {
    public String captchaResult;
    public Result withCaptchaResult(String captchaResult) {
        this.captchaResult = captchaResult;
        return this;
    }
    public ResultFormattedResults formattedResults;
    public Result withFormattedResults(ResultFormattedResults formattedResults) {
        this.formattedResults = formattedResults;
        return this;
    }
    public String id;
    public Result withId(String id) {
        this.id = id;
        return this;
    }
    public String[] invalidRules;
    public Result withInvalidRules(String[] invalidRules) {
        this.invalidRules = invalidRules;
        return this;
    }
    public String kind;
    public Result withKind(String kind) {
        this.kind = kind;
        return this;
    }
    public ResultPageStats pageStats;
    public Result withPageStats(ResultPageStats pageStats) {
        this.pageStats = pageStats;
        return this;
    }
    public Integer responseCode;
    public Result withResponseCode(Integer responseCode) {
        this.responseCode = responseCode;
        return this;
    }
    public java.util.Map<String, ResultRuleGroups> ruleGroups;
    public Result withRuleGroups(java.util.Map<String, ResultRuleGroups> ruleGroups) {
        this.ruleGroups = ruleGroups;
        return this;
    }
    public PagespeedApiImageV2 screenshot;
    public Result withScreenshot(PagespeedApiImageV2 screenshot) {
        this.screenshot = screenshot;
        return this;
    }
    public String title;
    public Result withTitle(String title) {
        this.title = title;
        return this;
    }
    public ResultVersion version;
    public Result withVersion(ResultVersion version) {
        this.version = version;
        return this;
    }
}