package openapisdk.models.shared;



/**
 * ResultVersion
 * The version of PageSpeed used to generate these results.
**/
public class ResultVersion {
    public Integer major;
    public ResultVersion withMajor(Integer major) {
        this.major = major;
        return this;
    }
    public Integer minor;
    public ResultVersion withMinor(Integer minor) {
        this.minor = minor;
        return this;
    }
}