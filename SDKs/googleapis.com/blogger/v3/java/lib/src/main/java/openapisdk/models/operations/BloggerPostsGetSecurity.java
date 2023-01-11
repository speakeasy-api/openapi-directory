package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BloggerPostsGetSecurity {
    @SpeakeasyMetadata("security:option=true")
    public BloggerPostsGetSecurityOption1 option1;
    public BloggerPostsGetSecurity withOption1(BloggerPostsGetSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public BloggerPostsGetSecurityOption2 option2;
    public BloggerPostsGetSecurity withOption2(BloggerPostsGetSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}