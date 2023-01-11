package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BloggerPostsGetByPathSecurity {
    @SpeakeasyMetadata("security:option=true")
    public BloggerPostsGetByPathSecurityOption1 option1;
    public BloggerPostsGetByPathSecurity withOption1(BloggerPostsGetByPathSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public BloggerPostsGetByPathSecurityOption2 option2;
    public BloggerPostsGetByPathSecurity withOption2(BloggerPostsGetByPathSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}